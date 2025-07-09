import BrandLogo from "@/components/BrandLogo";
import { FormControl, FormField, FormItem, FormMessage, Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";
import { useForm } from "react-hook-form";
import { deleteAccount, getUser, login, updateAccount } from "@/services/auth";
import { useUserStore } from "@/store/userStore";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

type FormValues = {
  username: string;
  password: string;
  email?: string;
};

function LoginPage() {
  const form = useForm<FormValues>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const editForm = useForm<FormValues>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const [editLoading, setEditLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const userId = useUserStore((state) => state.userId);
  const clearUser = useUserStore((state) => state.clearUser);
  const setUserFromToken = useUserStore((state) => state.setUserFromToken);
  const [userInfo, setUserInfo] = useState<{ username: string; email: string; password: string } | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUserFromToken(token);
    }
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      if (!userId) return;
      try {
        const user = await getUser(userId);
        setUserInfo(user);
        editForm.reset({
          username: user.username,
          email: user.email,
          password: user.password,
        });
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };
    fetchUser();
  }, [userId]);

  const onSubmit = async (data: FormValues) => {
    try {
      const token = await login(data.username, data.password);
      setUserFromToken(token);
    } catch (err) {
      alert("Login failed");
    }
  };

  const handleLogout = () => {
    clearUser();
    localStorage.clear();
    form.reset();
    // window.location.href = "/";
  };

  const handleDelete = async () => {
    const confirmed = window.confirm("⚠️ Are you sure you want to delete your account? This action cannot be undone.");
    if (!confirmed) return;

    if (!userId) {
      alert("Not logged in");
      return;
    }
    try {
      await deleteAccount(userId);
      alert("Your account has been deleted.");
      clearUser();
      localStorage.clear();
      window.location.href = "/";
    } catch (err) {
      alert("Failed to delete account.");
      console.error(err);
    }
  };

  const handleEdit = async (data: FormValues) => {
    if (!userId) {
      alert("Not logged in");
      return;
    }
    setEditLoading(true);
    try {
      await updateAccount(userId, data);
      const updated = await getUser(userId);
      setUserInfo(updated);
      editForm.reset({
        username: updated.username,
        email: updated.email,
        password: updated.password,
      });
      alert("Account updated successfully");
      setIsEditing(false);
    } catch (error) {
      console.error("Update failed:", error);
      alert("Failed to update account");
    } finally {
      setEditLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {userId ? (
        <div className="flex flex-col items-center shadow-xl w-[544px] h-[474px] pt-5 mt-30 border border-gray-200">
          <h1 className="text-[32px] font-bold text-navy-blue mb-4">Welcome!</h1>

          <div className="w-full px-6">
            {isEditing ? (
              <Form {...editForm}>
                <form onSubmit={editForm.handleSubmit(handleEdit)} className="space-y-4">
                  <FormField
                    control={editForm.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Username" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={editForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={editForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Password" type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex gap-4">
                    <Button type="submit" disabled={editLoading} className="bg-navy-blue text-white">
                      {editLoading ? "Updating..." : "Update Account"}
                    </Button>
                    <Button type="button" className="bg-gray-400 text-white" onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </Form>
            ) : (
              <>
                <p className="text-[20px] font-bold text-navy-blue mb-2">Username: {userInfo?.username}</p>
                <p className="text-[20px] font-bold text-navy-blue mb-2">Email: {userInfo?.email}</p>
                <p className="text-[20px] font-bold text-navy-blue mb-4">Password: {userInfo?.password}</p>
              </>
            )}
          </div>

          {!isEditing && (
            <Button onClick={() => setIsEditing(true)} className="mt-4 bg-navy-blue text-white mb-4">
              Edit Account Info
            </Button>
          )}

          <div className="flex gap-x-[20px] mb-4 mt-10 ">
            <Button
              variant="ghost"
              onClick={handleLogout}
              className="text-white bg-pink hover:bg-pink-400 text-[16px] font-medium px-4 py-2 rounded-md"
            >
              Logout
            </Button>
            <Button
              variant="ghost"
              onClick={handleDelete}
              className="text-white bg-pink hover:bg-pink-400 text-[16px] font-medium px-4 py-2 rounded-md"
            >
              Delete Account
            </Button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col items-center shadow-xl w-[544px] h-[474px] pt-5 mt-30 border border-gray-200">
            <h1 className="text-[32px] font-bold">Login</h1>
            <p className="text-gray">Please login using account details below.</p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full px-15 pt-5">
                <FormField
                  control={form.control}
                  name="username"
                  rules={{ required: "Username is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex flex-row border-2 rounded border-[#C2C5E1] items-center mb-[23px] h-[52px]">
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Username"
                            {...field}
                            className="h-[19px] border-none shadow-none text-[16px] placeholder-gray focus-visible:outline-none focus-visible:none focus-visible:ring-0"
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  rules={{ required: "Password is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex flex-row border-2 rounded border-gray items-center px-2">
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Password"
                            {...field}
                            className="h-[19px] border-none shadow-none text-[16px] placeholder-gray focus-visible:outline-none focus-visible:none focus-visible:ring-0"
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button variant="ghost" className="h-[20px] flex flex-row justify-start p-0 hover:text-navy-blue text-gray text-[17px]">
                  Forgot your password?
                </Button>

                <Button type="submit" className="w-full h-[47px] font-bold mb-[28px] ">
                  Sign in
                </Button>

                <Button
                  variant="ghost"
                  className="h-[20px] w-full flex flex-row items-center justify-center p-0 hover:text-navy-blue text-gray text-[17px] mb-[50px]"
                >
                  <Link to="/createAccount">Don’t have an Account? Create account</Link>
                </Button>
              </form>
            </Form>
          </div>
        </>
      )}
      <div>
        <BrandLogo />
      </div>
    </div>
  );
}

export default LoginPage;
