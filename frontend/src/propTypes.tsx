import { ReactElement } from "react"
import { UseFormHandleSubmit, UseFormRegister, SubmitHandler } from "react-hook-form"

type childProps = {
    children: ReactElement[] | ReactElement
}
type Input = {
    file: File
}

type contextProps = {
    message: string,
    handleSubmit: UseFormHandleSubmit<Input>,
    register: UseFormRegister<Input>,
    onSubmit: SubmitHandler<Input>
} | {};

type cardProps = {
    question: string,
    answer: string,
}
export type {
    childProps,
    Input,
    contextProps,
    cardProps
}