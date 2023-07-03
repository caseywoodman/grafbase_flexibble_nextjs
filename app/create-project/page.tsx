import Modal from "@/components/Modal"
import ProjectForm from "@/components/ProjectForm"
import { getCurrentUser } from "@/lib/session"
import { redirect } from "next/navigation"

const CreateProject = async() => {
    // Get the current user session
    const session = await getCurrentUser()
    // If there is no user session, redirect to the home page
    if(!session?.user) redirect('/')

  return (
    <Modal>
        <h3 className="modal-head-text">Create a New Project</h3>
        {/* ProjectForm component to fill in the creation area */}
        <ProjectForm type="create" session={session}/>
    </Modal>
  )
}

export default CreateProject