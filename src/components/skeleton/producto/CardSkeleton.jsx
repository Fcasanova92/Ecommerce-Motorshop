import { Skeleton } from "../Skeleton"


export const CardSkeleton = ({number}) => {

return (
    Array.from({ length: number }).map((_, i) => (
    <Skeleton key={i} />)))
}