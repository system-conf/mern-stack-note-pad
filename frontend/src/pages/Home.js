import { useEffect } from "react";
import NotDetay from "../components/notDetay";
import Notform from "../components/notform";
import { useNotContext } from "../hooks/useNotContext";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  const { notlar, dispatch } = useNotContext();

  const { kullanici } = useAuthContext();

  useEffect(() => {
    const fetchNotlar = async () => {
      const response = await fetch("/api/notlar", {
        headers: {
          Authorization: `Bearer ${kullanici.token}`,
        },
      });

      const json = await response.json();

      if (response.ok) {
        //setNotlar(json)
        dispatch({ type: "NOT_DOLDUR", payload: json });
      }
    };

    if (kullanici) {
      fetchNotlar();
    }
  }, [dispatch, kullanici]);

  return (
    <div className="home">
      <div className="not-form">
        <Notform />
      </div>
      <div className="notlar">
        {notlar && notlar.map((not) => <NotDetay key={not._id} not={not} />)}
      </div>
    </div>
  );
};
export default Home;
