import { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "../components/ui/moving-border";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card";
import Input from "../components/ui/input"
import Label from "../components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "../components/ui/tabs";
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";

export default function Update() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [verifyPassword, setVerifyPassword] = useState('');
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetchUserData(token);
        }
    }, []);

    const fetchUserData = async (token) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/user`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ token }),
            });

            const result = await res.json();
            if (result.email) {
                localStorage.setItem('token', result.token);
                console.log(result);
                setVerifyPassword(result.pass);
                setName(result.name);
                setEmail(result.email);
            } else {
                console.error("Token verification failed:", result.error);
                localStorage.removeItem('token');
                toast.error(`Session expired, please log in again.${result.error}`, {
                    position: "top-left",
                    autoClose: 4500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                    transition: Slide,
                });
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') setName(value);
        else if (name === 'email') setEmail(value);
        else if (name === 'password') setPassword(value);
        else if (name === 'newpassword') setNewPassword(value);
        else if (name === 'oldpassword') setOldPassword(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { name, email, oldPassword, newPassword }; // Corrected: use newPassword instead of password
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateUser`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await res.json();
            if (res.ok) {
                console.log(`Successfully made the changes ${result}`);
                toast.success('Successfully made the changes!', {
                    position: "top-left",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                    transition: Slide,
                });
            } else {
                toast.error(result.error, {
                    position: "top-left",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                    transition: Slide,
                });
            }
            setTimeout(() => {
                router.push('/');
            }, 3500);
        } catch (error) {
            toast.error(error.message, {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
                transition: Slide,
            });
            console.error("Error:", `Problem in updating the user ${error}`);
        }
        setName('');
        setEmail('');
        setPassword('');
        setOldPassword('');
        setNewPassword('');
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <ToastContainer
                position="top-left"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                theme="light"
                transition={Slide}
            />
            <div className="flex justify-center items-center min-h-screen">
                <Tabs defaultValue="account" className="w-[400px]">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="account">Account</TabsTrigger>
                        <TabsTrigger value="password">Password</TabsTrigger>
                    </TabsList>
                    <form onSubmit={handleSubmit}>
                        <TabsContent value="account">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Account</CardTitle>
                                    <CardDescription>
                                        Make changes to your account here. Click save when you're done.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="space-y-1">
                                        <label htmlFor="name">Name</label>
                                        <Input onChange={handleChange} id="name" name="name" value={name} />
                                    </div>
                                    <div className="space-y-1">
                                        <label htmlFor="email">Email</label>
                                        <Input onChange={handleChange} id="email" name="email" value={email} />
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="password">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Password</CardTitle>
                                    <CardDescription>
                                        Change your password here. After saving, you'll be logged out.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="space-y-1">
                                        <label htmlFor="oldpassword">Verify Old password</label>
                                        <Input onChange={handleChange} id="oldpassword" type="password" name="oldpassword" value={oldPassword} />
                                    </div>
                                    <div className="space-y-1">
                                        <label htmlFor="password">New password</label>
                                        <div className="relative flex items-center">
                                            <Input
                                                onChange={handleChange}
                                                id="password"
                                                type={showPassword ? "text" : "password"}
                                                name="newpassword"
                                                value={newPassword}
                                                className="pr-10"
                                            />
                                            <button
                                                type="button"
                                                className="absolute right-2"
                                                onClick={togglePasswordVisibility}
                                            >
                                                {!showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label htmlFor="newpassword">Confirm New password</label>
                                        <Input onChange={handleChange} id="newpassword" type="password" name="newpassword" value={newPassword} />
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button type="submit" className="border-1 border-zinc-600">Save password</Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                    </form>
                </Tabs>
            </div>
        </>
    );
}
