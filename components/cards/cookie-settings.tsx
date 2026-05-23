"use client"

import { Button } from "@/styles/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/styles/base/ui/card"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/styles/base/ui/field"
import { Switch } from "@/styles/base/ui/switch"

export function CardsCookieSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cookie Settings</CardTitle>
        <CardDescription>Manage your cookie settings here.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldLabel htmlFor="necessary">Strictly Necessary</FieldLabel>
            <FieldDescription>
              These cookies are essential in order to use the website and use
              its features.
            </FieldDescription>
          </FieldContent>
          <Switch id="necessary" defaultChecked aria-label="Necessary" />
        </Field>
        <Field>
          <Button variant="outline">Save preferences</Button>
        </Field>
      </CardContent>
    </Card>
  )
}
