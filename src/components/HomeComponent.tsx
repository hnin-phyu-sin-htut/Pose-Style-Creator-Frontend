import {Link} from "react-router-dom";

export default function HomeComponent() {
    return (
        <>
            <h1 className="text-2xl mt-6 text-center">Home Component</h1>
            <div className="mt-6 text-center">
                <div>
                    <Link to="/image-generator">Image Generator</Link>
                </div>
                <div>
                    <Link to="/avatar-uploader">Avatar Uploader</Link>
                </div>
                <div>
                    <Link to="/avatar-preview">Avatar Preview</Link>
                </div>
            </div>
        </>
    );
}
