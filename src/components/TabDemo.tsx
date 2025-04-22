// https://www.radix-ui.com/primitives/docs/components/tabs

import { Tabs } from "radix-ui";

const TabsDemo = () => (
  <Tabs.Root
    className="flex w-[450px] flex-col shadow-[0_2px_10px] shadow-blackA2"
    defaultValue="tab1"
  >
    <Tabs.List
      className="flex shrink-0 border-b border-mauve6"
      aria-label="Stub list of tabs"
    >
      <Tabs.Trigger
        className="flex h-[45px] flex-1 cursor-default select-none items-center justify-center bg-white px-5 text-[15px] leading-none text-mauve11 outline-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black"
        value="tab1"
      >
        Tab1
      </Tabs.Trigger>
      <Tabs.Trigger
        className="flex h-[45px] flex-1 cursor-default select-none items-center justify-center bg-white px-5 text-[15px] leading-none text-mauve11 outline-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black"
        value="tab2"
      >
        Tab2
      </Tabs.Trigger>
      <Tabs.Trigger
        className="flex h-[45px] flex-1 cursor-default select-none items-center justify-center bg-white px-5 text-[15px] leading-none text-mauve11 outline-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black"
        value="tab3"
      >
        Tab3
      </Tabs.Trigger>
      <Tabs.Trigger
        className="flex h-[45px] flex-1 cursor-default select-none items-center justify-center bg-white px-5 text-[15px] leading-none text-mauve11 outline-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black"
        value="tab4"
      >
        Tab4
      </Tabs.Trigger>
      <Tabs.Trigger
        className="flex h-[45px] flex-1 cursor-default select-none items-center justify-center bg-white px-5 text-[15px] leading-none text-mauve11 outline-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black"
        value="tab5"
      >
        Tab5
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content
      className="grow rounded-b-md bg-white p-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab1"
    >
      <p className="mb-5 text-[15px] leading-normal text-mauve11">Content1</p>
    </Tabs.Content>
    <Tabs.Content
      className="grow rounded-b-md bg-white p-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab2"
    >
      <p className="mb-5 text-[15px] leading-normal text-mauve11">Content2</p>
    </Tabs.Content>
    <Tabs.Content
      className="grow rounded-b-md bg-white p-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab3"
    >
      <p className="mb-5 text-[15px] leading-normal text-mauve11">Content3</p>
    </Tabs.Content>
    <Tabs.Content
      className="grow rounded-b-md bg-white p-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab4"
    >
      <p className="mb-5 text-[15px] leading-normal text-mauve11">Content4</p>
    </Tabs.Content>
    <Tabs.Content
      className="grow rounded-b-md bg-white p-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab5"
    >
      <p className="mb-5 text-[15px] leading-normal text-mauve11">Content5</p>
    </Tabs.Content>
  </Tabs.Root>
);

export default TabsDemo;
