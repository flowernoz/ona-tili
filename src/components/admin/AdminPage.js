import { Link, useNavigate } from "react-router-dom";
function AdminPage() {
  let navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1>Hush kelibsiz</h1>
      <button onClick={goBack}>Ortga qaytish</button>
    </div>
  );
}

export default AdminPage;
