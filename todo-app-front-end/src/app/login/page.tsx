import LoginForm from "./components/LoginForm";

function page() {
   return (
      <section className="bg-primary h-screen">
         <div className="h-full flex items-center justify-center">
            <LoginForm />
         </div>
      </section>
   );
}

export default page;
