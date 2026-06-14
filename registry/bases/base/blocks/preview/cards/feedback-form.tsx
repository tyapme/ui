"use client"

import { Button } from "@/registry/ui/button"
import { Card, CardContent, CardFooter } from "@/registry/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/registry/ui/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/ui/select"
import { Textarea } from "@/registry/ui/textarea"

export function FeedbackForm() {
  return (
    <Card>
      <CardContent>
        <form id="feedback-form">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="topic">Topic</FieldLabel>
              <Select kind="native">
                <SelectTrigger id="topic">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Select a topic</SelectItem>
                  <SelectItem value="ai">AI</SelectItem>
                  <SelectItem value="accounts-and-access-controls">
                    Accounts and Access Controls
                  </SelectItem>
                  <SelectItem value="billing">Billing</SelectItem>
                  <SelectItem value="cdn">CDN (Firewall, Caching)</SelectItem>
                  <SelectItem value="ci-cd">
                    CI/CD (Builds, Deployments, Environment Variables)
                  </SelectItem>
                  <SelectItem value="dashboard-interface">
                    Dashboard Interface (Navigation, UI Issues)
                  </SelectItem>
                  <SelectItem value="domains">Domains</SelectItem>
                  <SelectItem value="frameworks">Frameworks</SelectItem>
                  <SelectItem value="marketplace-and-integrations">
                    Marketplace and Integrations
                  </SelectItem>
                  <SelectItem value="observability">
                    Observability (Observability, Logs, Monitoring)
                  </SelectItem>
                  <SelectItem value="storage">Storage</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="feedback">Feedback</FieldLabel>
              <Textarea
                id="feedback"
                placeholder="Your feedback helps us improve..."
              />
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Button
          type="submit"
          form="feedback-form"
          className="style-sera:w-full"
        >
          Submit
        </Button>
      </CardFooter>
    </Card>
  )
}
