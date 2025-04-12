function customRender(reactElement,container){
    // const domelemnt=document.createElement(reactElement.type);
    // domelemnt.innerHTML=reactElement.children
    // domelemnt.setAttribute('href',reactElement.props.href)
    // domelemnt.setAttribute('target',reactElement.props.target)
    // container.appendChild(domelemnt);
    const domelemnt=document.createElement(reactElement.type)
    domelemnt.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        if(prop=='children'){
            continue;
        }
        domelemnt.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domelemnt);
}
const reactElement={
    type: 'a',
    props :{
        href: 'https://google.com',
        target : '_blank'

    },
    children:'click me to visit google'
}
const mainContainer=document.querySelector('#root');
customRender(reactElement,mainContainer);