import { type ChangeEvent, useState } from "react";
import { uploadImage } from "../service/ImageGenerationService";

export default function ImageGenerator() {

    const [file, setFile] = useState<File | null>(null);
    const [prompt, setPrompt] = useState("");
    const [preview, setPreview] = useState("");
    const [generatedImage, setGeneratedImage] = useState("");

    const handleUpload = (e: ChangeEvent<HTMLInputElement>) =>
    {
        const f = e.target.files?.[0];
        if (!f) return;

        setFile(f);
        setPreview(URL.createObjectURL(f));
        setGeneratedImage("");
    };

    const handleSubmit = async () => {
        if (!file || !prompt.trim()) {
            alert("Background image and prompt are required.");
            return;
        }

        try {
            const data = await uploadImage(file, prompt);
            console.log("Saved:", data);

            // IMPORTANT: show generated image
            setGeneratedImage(
                `http://localhost:8080${data.sourceImageUrl}`
            );

        } catch (err) {
            console.error(err);
            alert("Error generating image!");
        }
    };

    return (
        <div className="w-90 mx-auto mt-6 text-center flex flex-col items-center justify-center">

            {/* Upload */}
            <input
                className="border-2 border-gray-200 p-2 rounded cursor-pointer"
                type="file"
                accept="image/*"
                onChange={handleUpload}
            />

            {/* Background Preview */}
            {preview && (
                <>
                    <p className="mt-4 font-semibold">Background Preview</p>
                    <img
                        className="w-70 mt-2 rounded"
                        src={preview}
                        alt="Background Preview"
                    />
                </>
            )}

            {/* Prompt */}
            <textarea
                className="w-full p-4 border-2 m-6 rounded"
                placeholder="Prompt / Subject type (solo, couple, friend group)"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
            />

            {/* Submit */}
            <button
                onClick={handleSubmit}
                className="bg-purple-600 hover:bg-purple-800 text-white ms-auto py-2 px-6 rounded"
            >
                Generate
            </button>

            {/* Generated Result */}
            {generatedImage && (
                <>
                    <p className="mt-6 font-semibold">Generated Image</p>
                    <img
                        className="w-70 mt-2 rounded border-2"
                        src={generatedImage}
                        alt="Generated Result"
                    />
                </>
            )}
        </div>
    );
}
