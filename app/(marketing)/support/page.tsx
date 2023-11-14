import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";


export default function SupportPage() {
    return (
        <div className="container max-w-4xl py-6 lg:py-10">
            <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl"> Support Page</h1>

            <div className={cn("grid gap-6")} >
                <form >
                    <div className="grid gap-2 pt-20">
                        <div className="grid gap-1 pt-3">
                            <Label className="sr-only" htmlFor="fname">
                                First Name
                            </Label>
                            <Input
                                id="fname"
                                placeholder="Enter your first name"
                                type="text"
                                autoCapitalize="none"
                                autoCorrect="off"
                            />
                        </div>
                        <div className="grid gap-1 pt-3">
                            <Label className="sr-only" htmlFor="lname">
                                Last Name
                            </Label>
                            <Input
                                id="lname"
                                placeholder="Enter your last name"
                                type="text"
                                autoCapitalize="none"
                                autoCorrect="off"
                            />
                        </div>
                        <div className="grid gap-1 pt-3">
                            <Label className="sr-only" htmlFor="email">
                                Email
                            </Label>
                            <Input
                                id="email"
                                placeholder="Enter your email address"
                                type="email"
                                autoCapitalize="none"
                                autoComplete="email"
                                autoCorrect="off"
                            />

                        </div>
                        <div className="grid gap-1 pt-3">
                            <Label className="sr-only" htmlFor="issue">
                                Describe Issue
                            </Label>
                            <Textarea
                                id="issue"
                                placeholder="Describe your issue"
                                autoCapitalize="none"
                                autoCorrect="off"
                            />

                        </div>
                        <div className="grid gap-1 py-3">
                            <Label className="sr-only" htmlFor="app">
                                App Name
                            </Label>
                            <Input
                                id="app"
                                placeholder="Enter App name"
                                type="text"
                                autoCapitalize="none"
                                autoCorrect="off"

                            />

                        </div>
                        <button className={cn(buttonVariants())} >
                            {/* {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )} */}
                            Get Support
                        </button>
                    </div>
                </form>


            </div>

        </div>

    );

}
