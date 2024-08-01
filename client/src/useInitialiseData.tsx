import {useAtom} from "jotai";
import {PatientsAtom} from "./atoms/state.atom.tsx";
import {useEffect} from "react";
import {http} from "./http.ts";

export default function useInitialiseData() {
    const [, setPatients] = useAtom(PatientsAtom);

    useEffect( () => {
        http.patients.patientsList().then((r) => {
            setPatients(r.data)
        })
    },[])
}