import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex flex-col w-full h-full justify-center text-center leading-10"
    >
      <h1 className="font-bold text-2xl pb-10">Oops!</h1>
      <p className="pb-10">Sorry, an unexpected error has occurred.</p>
      <p>
        <i className="text-gray-500 pt-10">
          {error.status} {error.statusText || error.message}
        </i>
      </p>
    </div>
  );
}
