'use client'
import React from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
export default function UserById() {
    const { id } = useParams();
    const searchParam1 = useSearchParams().get("page");
    const searchParam2 = useSearchParams().get("name");

    return (
        <div className="flex flex-col">
            <p>
                User By Id {id}</p>
            <p>
                User By Search Param {searchParam1}</p>
            <p>
                User Name By Search Param {searchParam2}</p>
        </div>
    )
}


