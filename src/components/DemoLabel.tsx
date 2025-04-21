import { Label } from "radix-ui";

const DemoLabel = () => {
  return (
    <>
      <Label.Root htmlFor="firstName" className="text-orange-600">
        First name
      </Label.Root>
      <input
        name="firstName"
        type="text"
        id="firstName"
        className="border-gray-600 border-1 rounded-b-lg"
      />
    </>
  );
};

export default DemoLabel;
