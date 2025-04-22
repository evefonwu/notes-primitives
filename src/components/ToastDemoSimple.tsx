// https://www.radix-ui.com/primitives/docs/components/toast

import { Toast } from "radix-ui";
import { useState } from "react";

const DemoToastSimple = () => {
  const [open, setOpen] = useState(false);

  return (
    <Toast.Provider swipeDirection="right" duration={8000}>
      <button
        className="inline-flex h-[35px] items-center justify-center rounded bg-white px-[15px] text-[15px] font-medium leading-[35px] text-violet11 shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black"
        onClick={() => setOpen(true)}
      >
        Send Cheers!
      </button>
      <Toast.Root open={open} onOpenChange={setOpen}>
        <Toast.Title>Success</Toast.Title>
        <Toast.Description>
          <p>Cheers! Accessibility made easy.</p>
        </Toast.Description>
      </Toast.Root>

      <Toast.Viewport className="fixed bottom-0 left-0 z-[2147483647] m-0 flex w-[390px] max-w-[100vw] list-none flex-col gap-2.5 p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]" />
    </Toast.Provider>
  );
};

export default DemoToastSimple;
