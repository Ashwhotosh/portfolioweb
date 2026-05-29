import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          Error · 404
        </p>
        <h1 className="display mt-4 text-6xl text-foreground md:text-8xl">
          Lost the trail.
        </h1>
        <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
          The page you're looking for doesn't exist — at least not at <code>{location.pathname}</code>.
        </p>
        <a
          href="/"
          className="btn-primary mt-8 inline-flex"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
