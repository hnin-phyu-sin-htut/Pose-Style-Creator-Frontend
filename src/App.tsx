import {BrowserRouter, Route, Routes} from "react-router-dom";
import AvatarUploader from "./components/AvatarUploader.tsx";
import ImageGenerator from "./components/ImageGenerator.tsx";
import AvatarPreview from "./components/AvatarPreview.tsx";
import HomeComponent from "./components/HomeComponent.tsx";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <HomeComponent />
                <Routes>
                    <Route path="/image-generator" element={<ImageGenerator />} />
                    <Route path="/avatar-uploader" element={<AvatarUploader />} />
                    <Route path="/avatar-preview" element={<AvatarPreview />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
