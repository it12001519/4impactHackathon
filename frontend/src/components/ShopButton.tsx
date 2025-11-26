import { Button } from "react-bootstrap";
import { ShopWindow } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

export default function ShopButton() {
  let navigate = useNavigate();
  const toShop = () => {
    navigate("/shop?user=John Doe")
  }
  return <>
    <div className="d-grid gap-2">
      <Button variant="outline-dark" onClick={toShop}>
        <ShopWindow style={{ marginTop: "-3px" }} /> Shop
      </Button>
    </div>
  </>
}