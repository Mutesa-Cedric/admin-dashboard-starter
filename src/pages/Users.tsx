import { FiPlus } from "react-icons/fi";
import { Button } from "../components/Button";
import UsersTable from "../components/UsersTable";

export default function Users() {
  return (
    <div className="space-y-4 pl">
      <div className="w-full flex justify-between px-5">
        <div>
          <h2 className="text-xl font-medium text-gray-700">Users</h2>
          <p className="text-gray-500">Manage your users here.</p>
        </div>
        <Button color="blue" className="rounded-md space-x-2">
          <span>Add User</span>
          <FiPlus className="text-lg" />
        </Button>
      </div>
      <UsersTable />
    </div>
  )
}
