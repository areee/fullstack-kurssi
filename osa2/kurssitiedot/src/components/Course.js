import React from 'react'

const Header = ({ course }) => {
    return (
        <h2>{course.name}</h2>
    )
}

const Footer = ({ course }) => {
    const initialValue = 0
    const sum = course.parts.reduce(
        (accumulator, currentValue) => accumulator + currentValue.exercises
        , initialValue
    )
    return (
        <b>total of {sum} exercises</b>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    )
}

const Content = ({ course }) => {
    return (
        <div>
            {course.parts.map(part =>
                <Part key={part.id} part={part} />
            )}
        </div>
    )
}

const Course = ({ course }) => {
    return (
        <>
            <Header course={course} />
            <Content course={course} />
            <Footer course={course} />
        </>
    )
}

export default Course