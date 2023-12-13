import { TEInput, TERipple, TETextarea } from "tw-elements-react";
const Contact = () => {
  return (
    <div id="Contact">
      <div className="block max-w-xl mx-auto rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <form>
          {/* <!--Name input--> */}
          <TEInput
            type="text"
            label="Nombre"
            className="mb-6"
          ></TEInput>
          {/* <!--E-mail input--> */}
          <TEInput
            type="email"
            label="Mail"
            className="mb-6"
          ></TEInput>

          {/* <!--Message textarea--> */}
          <div className="relative mb-6">
            <TETextarea
              id="exampleFormControlTextarea13"
              label="Tu mensaje..."
              rows={3}
            />
          </div>

          {/* <!--Submit button--> */}
          <TERipple rippleColor="light" className="w-full">
            <button
              type="button"
              className="inline-block rounded w-full bg-slate-400 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              Send
            </button>
          </TERipple>
        </form>
      </div>
    </div>
  )
}
export default Contact;