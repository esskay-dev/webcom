import { Button } from "@/components/ui/button";

function BorderBeamEffect({
  duration,
  size,
}: {
  duration: number;
  size: number;
}) {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 rounded-[inherit] border-2 border-transparent"
      style={{
        padding: 2,
        background: `conic-gradient(from 0deg, transparent 0deg, hsl(var(--primary)) ${size}deg, transparent ${size + 45}deg) border-box`,
        WebkitMask:
          "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        animation: `spin ${duration}s linear infinite`,
      }}
    />
  );
}

export function Component() {
  return (
    <div className="relative w-[350px] overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          Login
        </h3>
        <p className="text-sm text-muted-foreground">
          Enter your credentials to access your account.
        </p>
      </div>
      <div className="p-6 pt-0">
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="flex items-center justify-between p-6 pt-0">
        <Button variant="outline">Register</Button>
        <Button>Login</Button>
      </div>
      <BorderBeamEffect duration={8} size={100} />
    </div>
  );
}

export default function BorderBeam() {
  return (
    <div className="container desc mt-10">
      <div className="content">
        <div>
          <div className="componentName">
            <h1>Border Beam</h1>
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
              <p className="componentStack">typescipt</p>
              <p className="componentStack">tailwind</p>
            </div>
          </nav>
        </div>
        <div className="stage-box">
          <BorderBeam />
        </div>
      </div>
    </div>
  );
}
