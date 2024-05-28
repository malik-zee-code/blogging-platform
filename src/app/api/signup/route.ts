/**
 * Handles the POST request for the signup route.
 *
 * @param req - The request object containing the JSON payload.
 * @returns A NextResponse object with a JSON response indicating the success or failure of the signup process.
 */

import { signup } from "@/actions/auth/actions";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const res = await req.json();
    await signup(res);

    return NextResponse.json(
      { msg: `Successfully signed up!` },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { msg: (error as Error).message },
      {
        status: 400,
      }
    );
  }
}
