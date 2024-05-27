export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      Generation: {
        Row: {
          createdAt: string | null
          generated_images: Json | null
          generation_elements: Json | null
          guidanceScale: number | null
          id: string
          imageHeight: number | null
          imageWidth: number | null
          inferenceSteps: number | null
          initStrength: number | null
          modelId: string | null
          negativePrompt: string | null
          photoReal: boolean | null
          photoRealStrength: number | null
          presetStyle: string | null
          prompt: string | null
          promptMagic: boolean | null
          promptMagicStrength: number | null
          promptMagicVersion: string | null
          public: boolean | null
          scheduler: string | null
          sdVersion: string | null
          seed: number | null
          status: string | null
          userId: string | null
        }
        Insert: {
          createdAt?: string | null
          generated_images?: Json | null
          generation_elements?: Json | null
          guidanceScale?: number | null
          id: string
          imageHeight?: number | null
          imageWidth?: number | null
          inferenceSteps?: number | null
          initStrength?: number | null
          modelId?: string | null
          negativePrompt?: string | null
          photoReal?: boolean | null
          photoRealStrength?: number | null
          presetStyle?: string | null
          prompt?: string | null
          promptMagic?: boolean | null
          promptMagicStrength?: number | null
          promptMagicVersion?: string | null
          public?: boolean | null
          scheduler?: string | null
          sdVersion?: string | null
          seed?: number | null
          status?: string | null
          userId?: string | null
        }
        Update: {
          createdAt?: string | null
          generated_images?: Json | null
          generation_elements?: Json | null
          guidanceScale?: number | null
          id?: string
          imageHeight?: number | null
          imageWidth?: number | null
          inferenceSteps?: number | null
          initStrength?: number | null
          modelId?: string | null
          negativePrompt?: string | null
          photoReal?: boolean | null
          photoRealStrength?: number | null
          presetStyle?: string | null
          prompt?: string | null
          promptMagic?: boolean | null
          promptMagicStrength?: number | null
          promptMagicVersion?: string | null
          public?: boolean | null
          scheduler?: string | null
          sdVersion?: string | null
          seed?: number | null
          status?: string | null
          userId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Generation_userid_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
        ]
      }
      User: {
        Row: {
          apiconcurrencyslots: number | null
          apipaidtokens: number | null
          apiplantokenrenewaldate: string | null
          apisubscriptiontokens: number | null
          id: string
          paidtokens: number | null
          subscriptiongpttokens: number | null
          subscriptionmodeltokens: number | null
          subscriptiontokens: number | null
          tokenrenewaldate: string | null
          username: string | null
        }
        Insert: {
          apiconcurrencyslots?: number | null
          apipaidtokens?: number | null
          apiplantokenrenewaldate?: string | null
          apisubscriptiontokens?: number | null
          id: string
          paidtokens?: number | null
          subscriptiongpttokens?: number | null
          subscriptionmodeltokens?: number | null
          subscriptiontokens?: number | null
          tokenrenewaldate?: string | null
          username?: string | null
        }
        Update: {
          apiconcurrencyslots?: number | null
          apipaidtokens?: number | null
          apiplantokenrenewaldate?: string | null
          apisubscriptiontokens?: number | null
          id?: string
          paidtokens?: number | null
          subscriptiongpttokens?: number | null
          subscriptionmodeltokens?: number | null
          subscriptiontokens?: number | null
          tokenrenewaldate?: string | null
          username?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
