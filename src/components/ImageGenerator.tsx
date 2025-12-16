import {type ChangeEvent, useState} from "react";
import {uploadImage} from "../service/ImageGenerationService.ts";

export default function ImageGenerator() {
    const [file, setFile] = useState<File | null>(null);
    const [prompt, setPrompt] = useState("");
    const [preview, setPreview] = useState("");

    const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const f = e.target.files?.[0];
        if (!f) return;
        setFile(f);
        setPreview(URL.createObjectURL(f));
    };

    const handleSubmit = () => {
        if (!file || !prompt) {
            alert("Missing data");
            return;
        }

        uploadImage(file, prompt)
            .then(data => {
                console.log("Saved:", data);
                alert("Saved successfully!");
            })
            .catch(err => {
                console.error(err);
                alert("Error saving data");
            });
    };

    return (
        <>
            <div className="w-90 mx-auto mt-6 text-center flex flex-col items-center justify-center">
                <input className="border-2 border-gray-200 p-2 rounded cursor-pointer"
                       type="file" accept="image/*"
                       name="file"
                       onChange={handleUpload} />
                {
                    preview && (
                        <img className="w-70 mt-6 rounded" src={preview} alt="Image Preview" />
                    )
                }
                <textarea className="w-full p-4 border-2 m-6 rounded"
                          placeholder="Prompt or Subject Type (such as solo, couple, or friend group)"
                          value={prompt}
                          name="prompt"
                          onChange={(e) => setPrompt(e.target.value)}>
                </textarea>
                <button onClick={handleSubmit}
                        className="bg-purple-600 hover:bg-purple-800 text-white ms-auto py-2 px-6 cursor-pointer rounded">
                    Submit
                </button>
            </div>
        </>
    );
}
