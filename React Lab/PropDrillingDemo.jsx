export default function Parent(){
    const title = "This is from Parent"
    const desc = "This is from Parent"
    const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s"
    return(
        <Child title={title} desc = {desc} image={image}/>
    )
}

function Child(props){
    return(
        <GrandChild title={props.title} desc={props.desc} image={props.image}/>
    )
}

function GrandChild(props){
    return(
        <GrandGrandChild title={props.title} desc={props.desc} image={props.image}/>
    )
}

function GrandGrandChild(props){
    return(
        <>
            <h1>{props.title}</h1>
            <h1>{props.desc}</h1>
            <img src={props.image}/>
        </>
    )
}