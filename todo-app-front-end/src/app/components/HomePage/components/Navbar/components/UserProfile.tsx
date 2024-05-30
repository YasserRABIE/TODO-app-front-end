import Image from "next/image";

function UserProfile({ name }: { name: string | undefined }) {
   return (
      <div className="flex gap-2 items-center pb-5 border-b-[2px] border-secondary">
         <Image
            src="/site-icon.jpeg"
            alt="user photo"
            width={70}
            height={70}
            style={{ borderRadius: "50%" }}
            priority
         />
         <div>
            <h2 className="block">Do-it</h2>
            <h1 className="text-secondary">{name}</h1>
         </div>
      </div>
   );
}

export default UserProfile;
