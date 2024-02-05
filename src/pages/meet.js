import { redirect } from "next/dist/server/api-utils"

const Meet = () => {
  return (
    <></>
  )
}

export function getServerSideProps() {
    return {
        redirect: {
            destination: "https://meet.google.com/bay-gucy-qxn",
            permanent: false
        }
    }
}

export default Meet