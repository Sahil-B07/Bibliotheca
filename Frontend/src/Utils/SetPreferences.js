import Cookies from "js-cookie";


const SetPreferences = async (topic,payloadData) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_PREFERENCES}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + Cookies.get("authToken")
      },
      body: JSON.stringify({[topic]:payloadData}),
    })
    console.log(process.env.NEXT_PUBLIC_PREFERENCES)
}

export default SetPreferences