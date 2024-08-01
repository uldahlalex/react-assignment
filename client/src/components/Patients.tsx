import {useAtom} from "jotai";
import {PatientsAtom} from "../atoms/state.atom.tsx";

export default function Patients() {

    const [patients, setPatients] = useAtom(PatientsAtom)

    return (<>
        {JSON.stringify(patients)}
    </>)
}