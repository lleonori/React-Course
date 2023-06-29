import { useParams, useSearchParams } from "react-router-dom";

function Articles() {
  const param = useParams();
  const [searchParams] = useSearchParams();
  return (
    <div>
      Articles - {param.id} - {searchParams.get("page")}
    </div>
  );
}

export default Articles;
