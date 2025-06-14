export function Button(props) {
  return <>
    <button onClick={props.onClick} className="bg-black text-white p-2 rounded-xl hover:bg-white hover:text-black transition-all transition-300">
      <div className="flex gap-2">
        {props.children}
        {props.buttonName}
      </div>
    </button>
  </>
}