export function uploadImage(file: File, prompt: string) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("prompt", prompt);

    return fetch("http://localhost:8080/api/image/generate-image", {
        method: "POST",
        body: formData
    }).then(res => {
        if (!res.ok) {
            throw new Error("Upload failed");
        }
        return res.json();
    });
}
