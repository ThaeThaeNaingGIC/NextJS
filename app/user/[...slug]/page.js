'use client'
import React from "react"
import { useParams, useRouter, useSearchParams } from "next/navigation";

export default function UserArray() {
    const arr = useParams();
    console.log("EEE", arr);
    return (
        <div>
            <h2>
                Hello UserArray
            </h2>
        </div>
    )
}