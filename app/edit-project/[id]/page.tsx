import { ProjectInterface } from "@/common.types"
import Modal from "@/components/Modal"
import ProjectForm from "@/components/ProjectForm"
import { getProjectDetails } from "@/lib/actions"
import { getCurrentUser } from "@/lib/session"
import { redirect } from "next/navigation"

const EditProject = async({ params: {id}}: { params: { id: string }}) => {
    // Get the current user session
    const session = await getCurrentUser()
    // If there is no user session, redirect to the home page
    if(!session?.user) redirect('/')
    // Get the project details that are stored in database
    const result = await getProjectDetails(id) as {
      project?: ProjectInterface}

  return (
    <Modal>
        <h3 className="modal-head-text">Edit Project</h3>
        <ProjectForm type="edit" session={session} project={result?.project} />
    </Modal>
  )
}

export default EditProject
