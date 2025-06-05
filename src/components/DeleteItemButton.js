import Button from "./Button";

export default function DeleteItemButton({ onClick }) {
  return (
    <Button type="danger-outline" className="btn-icon" onClick={onClick}>
      ✖
    </Button>
  );
}
