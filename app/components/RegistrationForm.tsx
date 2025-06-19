"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/app/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import {
  Loader2,
  User,
  Calendar,
  Scale,
  Ruler,
  CreditCard,
  AlertCircle,
} from "lucide-react";

interface FormErrors {
  name?: string;
  age?: string;
  gender?: string;
  height?: string;
  weight?: string;
  plan?: string;
}

export default function RegistrationForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    plan: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const age = parseInt(formData.age);
    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (age < 16 || age > 100) {
      newErrors.age = "Age must be between 16 and 100";
    }

    if (!formData.gender) {
      newErrors.gender = "Please select your gender";
    }

    const height = parseInt(formData.height);
    if (!formData.height) {
      newErrors.height = "Height is required";
    } else if (height < 100 || height > 250) {
      newErrors.height = "Height must be between 100-250 cm";
    }

    const weight = parseInt(formData.weight);
    if (!formData.weight) {
      newErrors.weight = "Weight is required";
    } else if (weight < 30 || weight > 300) {
      newErrors.weight = "Weight must be between 30-300 kg";
    }

    if (!formData.plan) {
      newErrors.plan = "Please select a membership plan";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
    setSubmitError("");
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });

    // Clear error when user makes selection
    if (errors[field as keyof FormErrors]) {
      setErrors({ ...errors, [field]: undefined });
    }
    setSubmitError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        router.push(`/payment?plan=${formData.plan}`);
      } else {
        setSubmitError(data.error || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setSubmitError(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const planOptions = [
    {
      value: "3month",
      label: "3 Months Plan",
      description: "Perfect for getting started",
    },
    {
      value: "6month",
      label: "6 Months Plan",
      description: "Most popular choice",
    },
    {
      value: "12month",
      label: "12 Months Plan",
      description: "Best value - Save more!",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        <div className="text-center mb-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold text-white mb-2"
          >
            Join Our Fitness Community
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-300 text-lg"
          >
            Start your fitness journey with a personalized plan
          </motion.p>
        </div>

        <Card className="shadow-2xl border-0 bg-gray-800/90 backdrop-blur-sm">
          <CardHeader className="pb-6">
            <CardTitle className="text-2xl text-center text-white">
              Registration Form
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3"
                >
                  <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-red-800">{submitError}</div>
                </motion.div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-200 flex items-center gap-2"
                  >
                    <User className="h-4 w-4" />
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`transition-all duration-200 bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 ${
                      errors.name
                        ? "border-red-500 focus:border-red-500"
                        : "focus:border-blue-400"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Age Field */}
                <div className="space-y-2">
                  <Label
                    htmlFor="age"
                    className="text-sm font-medium text-gray-200 flex items-center gap-2"
                  >
                    <Calendar className="h-4 w-4" />
                    Age
                  </Label>
                  <Input
                    id="age"
                    name="age"
                    type="number"
                    min="16"
                    max="100"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="Enter your age"
                    className={`transition-all duration-200 bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 ${
                      errors.age
                        ? "border-red-500 focus:border-red-500"
                        : "focus:border-blue-400"
                    }`}
                  />
                  {errors.age && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.age}
                    </p>
                  )}
                </div>
              </div>

              {/* Gender Field */}
              <div className="space-y-3">
                <Label className="text-sm font-medium text-gray-200">
                  Gender
                </Label>
                <RadioGroup
                  value={formData.gender}
                  onValueChange={(value) => handleSelectChange("gender", value)}
                  className="flex flex-wrap gap-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male" className="cursor-pointer text-white">
                      Male
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label
                      htmlFor="female"
                      className="cursor-pointer text-white"
                    >
                      Female
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label
                      htmlFor="other"
                      className="cursor-pointer text-white"
                    >
                      Other
                    </Label>
                  </div>
                </RadioGroup>
                {errors.gender && (
                  <p className="text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.gender}
                  </p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Height Field */}
                <div className="space-y-2">
                  <Label
                    htmlFor="height"
                    className="text-sm font-medium text-gray-200 flex items-center gap-2"
                  >
                    <Ruler className="h-4 w-4" />
                    Height (cm)
                  </Label>
                  <Input
                    id="height"
                    name="height"
                    type="number"
                    min="100"
                    max="250"
                    value={formData.height}
                    onChange={handleChange}
                    placeholder="e.g., 175"
                    className={`transition-all duration-200 bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 ${
                      errors.height
                        ? "border-red-500 focus:border-red-500"
                        : "focus:border-blue-400"
                    }`}
                  />
                  {errors.height && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.height}
                    </p>
                  )}
                </div>

                {/* Weight Field */}
                <div className="space-y-2">
                  <Label
                    htmlFor="weight"
                    className="text-sm font-medium text-gray-200 flex items-center gap-2"
                  >
                    <Scale className="h-4 w-4" />
                    Weight (kg)
                  </Label>
                  <Input
                    id="weight"
                    name="weight"
                    type="number"
                    min="30"
                    max="300"
                    value={formData.weight}
                    onChange={handleChange}
                    placeholder="e.g., 70"
                    className={`transition-all duration-200 bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 ${
                      errors.weight
                        ? "border-red-500 focus:border-red-500"
                        : "focus:border-blue-400"
                    }`}
                  />
                  {errors.weight && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.weight}
                    </p>
                  )}
                </div>
              </div>

              {/* Plan Selection */}
              <div className="space-y-3">
                <Label className="text-sm font-medium text-gray-200 flex items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  Membership Plan
                </Label>
                <Select
                  value={formData.plan}
                  onValueChange={(value) => handleSelectChange("plan", value)}
                >
                  <SelectTrigger
                    className={`transition-all duration-200 bg-gray-700 border-gray-600 text-white ${
                      errors.plan
                        ? "border-red-500 focus:border-red-500"
                        : "focus:border-blue-400"
                    }`}
                  >
                    <SelectValue placeholder="Choose your membership plan" />
                  </SelectTrigger>
                  <SelectContent>
                    {planOptions.map((plan) => (
                      <SelectItem
                        key={plan.value}
                        value={plan.value}
                        className="py-3"
                      >
                        <div>
                          <div className="font-medium">{plan.label}</div>
                          <div className="text-sm text-gray-500">
                            {plan.description}
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.plan && (
                  <p className="text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.plan}
                  </p>
                )}
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Complete Registration"
                  )}
                </Button>
              </motion.div>
            </form>
          </CardContent>
        </Card>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-6 text-sm text-gray-300"
        >
          By registering, you agree to our{" "}
          <a href="/terms" className="text-blue-400 hover:underline">
            Terms of Service
          </a>{" "}
        </motion.div>
      </motion.div>
    </div>
  );
}
