type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
}

export const Header = ({ user }: HeaderProps) => (
  <header>
    <div className="text-xl text-blue-600">
      {user ? (
        <>
          Welcome, <b>{user.name}</b>!
        </>
      ) : (
        <>Welcome</>
      )}
    </div>
  </header>
);
