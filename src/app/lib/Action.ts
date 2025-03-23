'use server'

import { ResponseStateType } from "../page"

export async function handlejoin(_: ResponseStateType,form: FormData): Promise<ResponseStateType> {
    
    return {response:  form.get('id')?.toString() || null}
  }