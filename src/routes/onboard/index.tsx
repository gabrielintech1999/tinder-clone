export default function Onboard() {
  return (
    <div style={{marginTop: "62px", paddingTop: "30px", borderTop: "1px solid #9CA3AF"}}>
      <h1 className="uppercase text-center font-bold pt-3 text-black">Create Account</h1>
      <form method="post" className=" max-w-[1000px] p-4  m-auto ">
        <div className="flex justify-center gap-10 ">
          <div className="flex flex-col gap-4">
            <label htmlFor="firstName" className="flex flex-col gap-2">
              First Name
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="border-gray-400  rounded border w-96 p-2 "
              />
            </label>
            <label htmlFor="firstName" className="flex flex-col gap-2">
              Birthday
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="border-gray-700 border "
              />
            </label>
            <label htmlFor="gender" className="flex flex-col gap-2">
              Gender
              <input
                type="text"
                name="gender"
                id="firstName"
                className="border-gray-700 border "
              />
            </label>
            <label htmlFor="firstName" className="flex flex-col gap-2">
              About me
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="border-gray-400  rounded border w-96 p-2"
              />
            </label>
            <label
              htmlFor="firstName"
              className="flex flex-col items-start text-left border gap-2"
            >
              Show gender on my profile
              <input
                type="checkbox"
                name="firstName"
                id="firstName"
                className="border-gray-700 border"
              />
            </label>
            <label htmlFor="firstName" className="flex flex-col gap-2">
              About me
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="border-gray-400  rounded border w-96 p-2"
              />
            </label>
          </div>
          <div>
            <label htmlFor="firstName" className="flex flex-col gap-2">
              Profile
              <input
                type="text"
                name="imageUrl"
                id="imageUrl"
                className="border-gray-400  rounded border w-96 p-2"
              />
            </label>
            <div>
              <img src="" alt="" />
            </div>
          </div>
        </div>
        <button type="submit" className="ml-20 mt-5 border  w-96 bg-gray-400 p-2 rounded">Submit</button>
      </form>
    </div>
  );
}
