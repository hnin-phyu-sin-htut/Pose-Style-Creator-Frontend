import type {ImageGenerationDto} from "../dto/ImageGenerationDto.ts";

const BASE_URL = "http://localhost:8080";

export function uploadImage(
    file: File,
    prompt: string
): Promise<ImageGenerationDto> {

    const formData = new FormData();
    formData.append("file", file);
    formData.append("prompt", prompt);

    return fetch(`${BASE_URL}/api/image/generate-image`, {
        method: "POST",
        body: formData
    }).then(res => {
        if (!res.ok) {
            throw new Error("Image generation failed!");
        }
        return res.json();
    });
}
