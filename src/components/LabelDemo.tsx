// https://www.radix-ui.com/primitives/docs/components/label

import { Label } from "radix-ui";

const LabelDemo = () => {
  return (
    <>
      <Label.Root htmlFor="firstName" className="text-orange-600">
        First name
      </Label.Root>
      <input
        name="firstName"
        type="text"
        id="firstName"
        className="border-gray-600 border-3 rounded-md"
      />
    </>
  );
};

export default LabelDemo;
