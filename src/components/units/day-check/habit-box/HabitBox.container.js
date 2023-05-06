import HabitBoxUI from "./HabitBox.presenter"



export default function HabitBox(props) {

    // 로직을 여기다 담아라
   
    const colorArray = ['var(--color-purple4)', 'var(--color-skyblue4)', 'var(--color-green4)']
    const btnColorArray = ['var(--color-purple2)', 'var(--color-skyblue2)', 'var(--color-green2)']


    return (
        <HabitBoxUI 
        name={props.name}
        index={props.index}
        colorArray={colorArray}
        btnColorArray={btnColorArray}
        />
    )

}