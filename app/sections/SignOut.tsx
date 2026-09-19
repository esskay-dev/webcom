import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { User, CreditCard, Bell, LogOutIcon } from "lucide-react";

export default function SignOut() {
  return (
    <div className="container desc">
      <div className="content">
        <div>
          <div className="componentName">
            <h1>Account Switcher</h1>
          </div>
          <div className="componentParagraph">
            <p>
              The count slides up into the corner as it pops open, <br />
              and blurs out on the way back. Press the bell, then press it
              again.
            </p>
          </div>
          <nav className="componentContainer">
            <div className="componentFlex">
              <p className="componentStack">react</p>
              <p className="componentStack">tailwind</p>
              <p className="componentStack">css</p>
            </div>
          </nav>
        </div>
        <div className="stage-box">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="size-12 cursor-pointer">
                <AvatarImage className="" src="/win.jpg" alt="Account" />
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="border border-white, bg-white">
              <DropdownMenuItem className="text-black/50 hover:bg-black/10 hover:text-black cursor-pointer">
                <User /> Account
              </DropdownMenuItem>
              <DropdownMenuItem className="text-black/50 hover:bg-black/10 hover:text-black cursor-pointer">
                <CreditCard /> Billing
              </DropdownMenuItem>
              <DropdownMenuItem className="text-black/50 hover:bg-black/10 hover:text-black cursor-pointer">
                <Bell /> Notifications
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-black/50" />
              <DropdownMenuItem className="text-black/50 hover:bg-black/10 hover:text-black cursor-pointer">
                <LogOutIcon /> Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
