import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
    const navigete = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigete("/");
        }, 6000);
    }, [navigete]);

    return <h1>NotFound</h1>;
}
