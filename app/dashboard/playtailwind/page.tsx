export  default function page(){
    return <>
        <h1 className="text-blue-500">I'm blue!</h1>
        <hr/>
        <div className="p-6 max-w-sm mx-auto bg-pink-400 rounded-xl shadow-lg flex items-center space-x-4">
            <div className="shrink-0">
                <img className="h-12 w-12" src="/customers/amy-burns.png" alt="ChitChat Logo"/>
            </div>
            <div>
                <div className="text-xl font-medium text-black">ChitChat</div>
                <p className="text-slate-500">You have a new message!</p>
            </div>
        </div>

        {/*<div className="flex h-[300px] items-center justify-center border border-red-200">*/}
        {/*    <p>我是垂直和水平居中的内容。</p>*/}
        {/*</div>*/}
    </>;

}