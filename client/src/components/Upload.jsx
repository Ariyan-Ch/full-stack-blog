import {upload,ImageKitAbortError,} from "@imagekit/react";
import { useRef } from "react";
import { toast } from "react-toastify";
  
  const authenticator = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/posts/upload-auth`
      );
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Request failed with status ${response.status}: ${errorText}`
        );
      }
      const { signature, expire, token } = await response.json();
      return { signature, expire, token };
    } catch (err) {
      console.error("Auth error:", err);
      throw new Error(`Authentication request failed: ${err.message}`);
    }
  };
  
const Upload = ({ children, type, setProgress, setData }) => {
    const fileInputRef = useRef(null);
    // Optionally, allow canceling
    const abortController = new AbortController();
  
    const handleFileChange = async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
  
      let authParams;
      try {
        authParams = await authenticator();
      } catch (authErr) {
        toast.error("Unable to authenticate upload");
        return;
      }
  
      try {
        const result = await upload({
          file,                             // File object
          fileName: file.name,              // or generate
          signature: authParams.signature,
          expire: authParams.expire,
          token: authParams.token,
          publicKey: import.meta.env.VITE_IK_PUBLIC_API,
          urlEndpoint: import.meta.env.VITE_IK_URL,
          useUniqueFileName: true,
          onProgress: (evt) => {
            setProgress(Math.round((evt.loaded / evt.total) * 100));
          },
          abortSignal: abortController.signal,
        });
        console.log("Upload success:", result);
        setData(result);
      } catch (err) {
        console.error("Upload error:", err);
        if (err instanceof ImageKitAbortError) {
          toast.warn("Upload aborted");
        } else {
          toast.error("Image upload failed!");
        }
      }
    };
  
    return (
      <>
        <input
          type="file"
          accept={`${type}/*`}
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />
        <div
          className="cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
        >
          {children}
        </div>
      </>
    );
  };
  
  export default Upload;
  